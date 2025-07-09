import Link from 'next/link';
import { DesignIcon, Stack } from '@/core/design-systems';
import { SOCIAL_ITEMS } from '@/shared/atom-components/layout/footer/footer.const';
import { LayoutFooterSocialProps } from '@/shared/atom-components/layout/layout.type';

const LayoutFooterSocial = <C extends React.ElementType>(props: LayoutFooterSocialProps<C>) => {
  const { className = '', ...restProps } = props;

  return (
    <Stack component="ul" direction="row" gap="12px" className={`${className}`} {...restProps}>
      {SOCIAL_ITEMS.map((item) => (
        <li key={item.key}>
          <DesignIcon component={Link} href={item.pathname} target={item.target} rel="noreferrer" titleAccess={item.label} {...item.designIconProps} />
        </li>
      ))}
    </Stack>
  );
};

export default LayoutFooterSocial;
