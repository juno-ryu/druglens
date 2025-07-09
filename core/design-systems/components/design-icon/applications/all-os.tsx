import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface AllOsProps extends SvgIconProps {
  //
}

const AllOs = (props: AllOsProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 14} height={height} {...restProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.8 9.26055H12.2V2.11055H1.8V9.26055ZM7.65 10.5605V11.8605H10.25V13.1605H3.75V11.8605H6.35V10.5605H1.14467C0.788633 10.5605 0.5 10.2688 0.5 9.90567V1.46541C0.5 1.10374 0.795952 0.810547 1.14467 0.810547H12.8553C13.2114 0.810547 13.5 1.10234 13.5 1.46541V9.90567C13.5 10.2673 13.2041 10.5605 12.8553 10.5605H7.65Z"
          fill="#313135"
        />
      </svg>
    </SvgIcon>
  );
};

export default AllOs;
