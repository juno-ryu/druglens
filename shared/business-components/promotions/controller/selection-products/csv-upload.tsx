'use client';

import { Fragment } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form';
import { Button } from '@/core/design-systems';
import useCsvUpload from '@/core/shared/hooks/upload/use-csv-upload/use-csv-upload';
import { TypeCsvUploadOptions } from '@/core/shared/hooks/upload/use-csv-upload/use-csv-upload.type';

export interface CsvUploadProps<T extends FieldValues = object> extends React.HTMLProps<HTMLInputElement> {
  name: FieldPath<T>;
  inputKey: number;
  uploadOptions: TypeCsvUploadOptions;
}

const CsvUpload = <T extends FieldValues = FieldValues>(props: CsvUploadProps<T>) => {
  const { inputKey, name, required = false, disabled = false, multiple = false, draggable = true, uploadOptions, ...restProps } = props;

  const { inputRef, onUploadChange } = useCsvUpload(uploadOptions);

  return (
    <Fragment>
      <input
        key={inputKey}
        ref={inputRef}
        type="file"
        id={`${name}File`}
        name={`${name}File`}
        required={required}
        disabled={disabled}
        multiple={multiple}
        accept={uploadOptions?.accept ? uploadOptions.accept.join(', ') : undefined}
        draggable={draggable}
        onChange={onUploadChange}
        className="sr-only"
        {...restProps}
      />
      <Button variant="contained" size="medium" sx={{ px: '16px', cursor: 'pointer' }} onClick={() => inputRef?.current?.click()}>
        엑셀 추가
      </Button>
    </Fragment>
  );
};

export default CsvUpload;
