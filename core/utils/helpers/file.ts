import { unzip, ZipEntry } from 'unzipit';
import APPLICATIONS from '@/core/utils/yup/data/applications';
import { PresignedUploadedComponent } from '@/core/shared/service/input/presigned-input/presigned-uploaded-component';
import { ApplicationOutput } from '@/core/shared/service/output/application-output';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const units = ['Byte', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / Math.pow(1024, i);
  return `${size % 1 === 0 ? size.toFixed(0) : size.toFixed(2)} ${units[i]}`;
};

export type TypeUnpackOptions = {
  inputFile: File;
  extensions: ExtensionOutput[];
  applications: ApplicationOutput[];
};

export type TypeUnpackResult = {
  newFileNames: string[];
  newFileComponents?: PresignedUploadedComponent[];
  newExtensions: number[];
  newApplications: number[];
};

export const extractInfo = ({
  fileName,
  fileSize,
  extensions,
  applications,
}: {
  fileName: string;
  fileSize?: number;
  extensions: ExtensionOutput[];
  applications: ApplicationOutput[];
}) => {
  const extension = '.' + fileName.split('.').pop()?.toLowerCase();
  const extensionId = extensions.find((x) => x.name === extension)?.id;
  const application = APPLICATIONS[extension.replace('.', '')] || [];
  const applicationId = applications.find((x) => application.includes(x.name))?.id;
  return { fileName, fileSize, extensionId, applicationId };
};

export const readFile = ({ file, extensions, applications }: { file: File; extensions: ExtensionOutput[]; applications: ApplicationOutput[] }) => {
  return extractInfo({ fileName: file.name, extensions, applications });
};

export const readZipEntry = ({ entry, extensions, applications }: { entry: ZipEntry; extensions: ExtensionOutput[]; applications: ApplicationOutput[] }) => {
  if (entry.isDirectory) return null;
  if (entry.name.match(/^__MACOSX\//)) return null;
  let fileName = entry.name;
  const fileSize = entry.size;
  if (fileName.includes('�')) {
    const decoder = new TextDecoder('euc-kr');
    fileName = decoder.decode(entry.nameBytes);
  }
  return extractInfo({ fileName, fileSize, extensions, applications });
};

export const unpackFile = async ({ inputFile, extensions, applications }: TypeUnpackOptions): Promise<TypeUnpackResult | undefined> => {
  try {
    const result = readFile({ file: inputFile, extensions, applications });
    if (!result) {
      console.error('파일 읽기 실패');
      return undefined;
    }
    const { fileName, extensionId, applicationId } = result;
    return {
      newFileNames: fileName ? [fileName] : [],
      newExtensions: extensionId ? [extensionId] : [],
      newApplications: applicationId ? [applicationId] : [],
    };
  } catch (error) {
    console.error('파일 읽기 실패', error);
    return undefined;
  }
};

export const unpackZip = async ({ inputFile, extensions, applications }: TypeUnpackOptions): Promise<TypeUnpackResult | undefined> => {
  try {
    const newFileNames: string[] = [];
    const newFileComponents: PresignedUploadedComponent[] = [];
    const newExtensions: number[] = [];
    const newApplications: number[] = [];
    const zip = await unzip(inputFile);
    for (const key in zip.entries) {
      const entry: ZipEntry = zip.entries[key];
      const result = readZipEntry({ entry, extensions, applications });

      if (!result) {
        // console.error('파일 읽기 실패');
        continue;
      }

      const { fileName, fileSize, extensionId, applicationId } = result;
      if (fileName) newFileNames.push(fileName);
      if (fileName) newFileComponents.push({ name: fileName, size: fileSize || 0 });
      if (extensionId) newExtensions.push(extensionId);
      if (applicationId) newApplications.push(applicationId);
    }
    console.log('압축 해제 결과:', {
      newFileNames,
      newFileComponents,
      newExtensions,
      newApplications,
    });
    return {
      newFileNames,
      newFileComponents,
      newExtensions,
      newApplications,
    };
  } catch (error) {
    console.error('파일 압축 해제 실패', error);
    return undefined;
  }
};

export const readImageSize = async (blob: string | ArrayBuffer | null): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const src = typeof blob === 'string' ? blob : (blob as ArrayBuffer).toString();
    const imgTag = document.createElement('img');
    imgTag.src = src;
    imgTag.onload = function () {
      resolve({
        width: imgTag.width,
        height: imgTag.height,
      });
    };
  });
};

export const readImageBlob = async (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve) => {
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = () => {
      resolve(fr.result);
    };
  });
};
