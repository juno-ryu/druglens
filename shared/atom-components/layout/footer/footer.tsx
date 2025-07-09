import { DesignIcon, Stack } from '@/core/design-systems';
import Language from '@/shared/atom-components/form/language/language';
import LayoutFooterCompany from '@/shared/atom-components/layout/footer/footer-company';
import LayoutFooterQuickLink from '@/shared/atom-components/layout/footer/footer-quick-link';
import LayoutFooterSocial from '@/shared/atom-components/layout/footer/footer-social';
import { LayoutFooterContainer, LayoutFooterNavigation, LayoutFooterSummary } from '@/shared/atom-components/layout/footer/footer.style';
import { LayoutFooterProps } from '@/shared/atom-components/layout/layout.type';

const LayoutFooter = (props: LayoutFooterProps) => {
  const { className = '', ...restProps } = props;

  return (
    <LayoutFooterContainer className={`${className}`} {...restProps}>
      <LayoutFooterNavigation>
        <LayoutFooterQuickLink />
        <Stack direction="row" alignItems="center" gap="28px" height="20px">
          <LayoutFooterSocial />
          <Language headlineStyle={{ display: 'none' }} submitStyle={{ display: 'none' }} />
        </Stack>
      </LayoutFooterNavigation>
      <LayoutFooterSummary>
        <DesignIcon variant="LogoAcon" width="75px" height="21px" color="gray/600" titleAccess="Acon" />
        <LayoutFooterCompany />
      </LayoutFooterSummary>
    </LayoutFooterContainer>
  );
};

export default LayoutFooter;
