import { createTheme, PaletteMode } from '@mui/material';
import { MuiAccordionOverride } from '@/core/design-systems/components/accordion';
import { MuiAccordionDetailsOverride } from '@/core/design-systems/components/accordion-details';
import { MuiAccordionSummaryOverride } from '@/core/design-systems/components/accordion-summary';
import { MuiAlertOverride } from '@/core/design-systems/components/alert';
import { MuiAlertTitleOverride } from '@/core/design-systems/components/alert-title';
import { MuiAvatarOverride } from '@/core/design-systems/components/avatar';
import { MuiBottomNavigationOverride } from '@/core/design-systems/components/bottom-navigation';
import { MuiBottomNavigationActionOverride } from '@/core/design-systems/components/bottom-navigation-action';
import { MuiBoxOverride } from '@/core/design-systems/components/box';
import { MuiBreadcrumbsOverride } from '@/core/design-systems/components/breadcrumbs';
import { MuiButtonOverride } from '@/core/design-systems/components/button';
import { MuiCheckboxOverride } from '@/core/design-systems/components/checkbox';
import { MuiChipOverride } from '@/core/design-systems/components/chip';
import { MuiCircularProgressOverride } from '@/core/design-systems/components/circular-progress';
import { MuiDesignIconOverride } from '@/core/design-systems/components/design-icon';
import { MuiDesignLabelOverride } from '@/core/design-systems/components/design-label';
import { MuiDesignStatOverride } from '@/core/design-systems/components/design-stat';
import { MuiDialogOverride } from '@/core/design-systems/components/dialog';
import { MuiDividerOverride } from '@/core/design-systems/components/divider';
import { MuiDrawerOverride } from '@/core/design-systems/components/drawer';
import { MuiFormControlOverride } from '@/core/design-systems/components/form-control';
import { MuiFormControlLabelOverride } from '@/core/design-systems/components/form-control-label';
import { MuiFormGroupOverride } from '@/core/design-systems/components/form-group';
import { MuiFormHelperTextOverride } from '@/core/design-systems/components/form-helper-text';
import { MuiFormLabelOverride } from '@/core/design-systems/components/form-label';
import { MuiGridOverride } from '@/core/design-systems/components/grid';
import { MuiIconButtonOverride } from '@/core/design-systems/components/icon-button';
import { MuiInputAdornmentOverride } from '@/core/design-systems/components/input-adornment';
import { MuiInputBaseOverride } from '@/core/design-systems/components/input-base';
import { MuiInputLabelOverride } from '@/core/design-systems/components/input-label';
import { MuiLinearProgressOverride } from '@/core/design-systems/components/linear-progress';
import { MuiLinkOverride } from '@/core/design-systems/components/link';
import { MuiLoaderOverride } from '@/core/design-systems/components/loader';
import { MuiMenuOverride } from '@/core/design-systems/components/menu';
import { MuiMenuItemOverride } from '@/core/design-systems/components/menu-item';
import { MuiMenuListOverride } from '@/core/design-systems/components/menu-list';
import { MuiPaginationOverride } from '@/core/design-systems/components/pagination';
import { MuiPaginationItemOverride } from '@/core/design-systems/components/pagination-item';
import { MuiRadioOverride } from '@/core/design-systems/components/radio';
import { MuiRadioGroupOverride } from '@/core/design-systems/components/radio-group';
import { MuiRatingOverride } from '@/core/design-systems/components/rating';
import { MuiSelectOverride } from '@/core/design-systems/components/select';
import { MuiSkeletonOverride } from '@/core/design-systems/components/skeleton';
import { MuiSnackbarOverride } from '@/core/design-systems/components/snackbar';
import { MuiStackOverride } from '@/core/design-systems/components/stack';
import { MuiStepOverride } from '@/core/design-systems/components/step';
import { MuiStepConnectorOverride } from '@/core/design-systems/components/step-connector';
import { MuiStepContentOverride } from '@/core/design-systems/components/step-content';
import { MuiStepLabelOverride } from '@/core/design-systems/components/step-label';
import { MuiStepperOverride } from '@/core/design-systems/components/stepper';
import { MuiSvgIconOverride } from '@/core/design-systems/components/svg-icon';
import { MuiSwipeableDrawerOverride } from '@/core/design-systems/components/swipeable-drawer';
import { MuiSwitchOverride } from '@/core/design-systems/components/switch';
import { MuiTabOverride } from '@/core/design-systems/components/tab';
import { MuiTabsOverride } from '@/core/design-systems/components/tabs';
import { MuiTextFieldOverride } from '@/core/design-systems/components/text-field';
import { MuiToggleButtonOverride } from '@/core/design-systems/components/toggle-button';
import { MuiToggleButtonGroupOverride } from '@/core/design-systems/components/toggle-button-group';
import { MuiTooltipOverride } from '@/core/design-systems/components/tooltip';
import { MuiTypographyOverride, typographyVariants } from '@/core/design-systems/components/typography';
import { breakpoint } from '@/core/design-systems/theme/breakpoint';
import {
  commonPalette,
  customColorPalette,
  darkHexColorPalette,
  getAugmentColorPalette,
  getStatePalette,
  lightHexColorPalette,
} from '@/core/design-systems/theme/palette';
import { shadows } from '@/core/design-systems/theme/shadow';
import { zIndex } from '@/core/design-systems/theme/z-index';

export const getTheme = (mode: PaletteMode) => {
  const palette = mode === 'light' ? lightHexColorPalette : darkHexColorPalette;
  return createTheme({
    zIndex,
    shadows,
    breakpoints: {
      values: breakpoint,
    },
    palette: {
      mode,
      ...commonPalette,
      ...palette,
      ...getAugmentColorPalette(palette),
      ...customColorPalette,
      ...getStatePalette(palette),
    },
    typography: typographyVariants,
    components: {
      MuiAlert: MuiAlertOverride,
      MuiAlertTitle: MuiAlertTitleOverride,
      MuiAvatar: MuiAvatarOverride,
      MuiAccordion: MuiAccordionOverride,
      MuiAccordionDetails: MuiAccordionDetailsOverride,
      MuiAccordionSummary: MuiAccordionSummaryOverride,
      MuiBox: MuiBoxOverride,
      MuiBreadcrumbs: MuiBreadcrumbsOverride,
      MuiButton: MuiButtonOverride,
      MuiBottomNavigation: MuiBottomNavigationOverride,
      MuiBottomNavigationAction: MuiBottomNavigationActionOverride,
      MuiCheckbox: MuiCheckboxOverride,
      MuiChip: MuiChipOverride,
      MuiLoader: MuiLoaderOverride,
      MuiDesignIcon: MuiDesignIconOverride,
      MuiDesignLabel: MuiDesignLabelOverride,
      MuiDesignStat: MuiDesignStatOverride,
      MuiDivider: MuiDividerOverride,
      MuiDialog: MuiDialogOverride,
      MuiSnackbar: MuiSnackbarOverride,
      MuiCircularProgress: MuiCircularProgressOverride,
      MuiLinearProgress: MuiLinearProgressOverride,
      MuiDrawer: MuiDrawerOverride,
      MuiSwipeableDrawer: MuiSwipeableDrawerOverride,
      MuiRating: MuiRatingOverride,
      MuiFormControl: MuiFormControlOverride,
      MuiFormControlLabel: MuiFormControlLabelOverride,
      MuiFormGroup: MuiFormGroupOverride,
      MuiFormHelperText: MuiFormHelperTextOverride,
      MuiFormLabel: MuiFormLabelOverride,
      MuiGrid2: MuiGridOverride,
      MuiIconButton: MuiIconButtonOverride,
      MuiInputAdornment: MuiInputAdornmentOverride,
      MuiInputBase: MuiInputBaseOverride,
      MuiInputLabel: MuiInputLabelOverride,
      MuiLink: MuiLinkOverride,
      MuiMenu: MuiMenuOverride,
      MuiMenuList: MuiMenuListOverride,
      MuiMenuItem: MuiMenuItemOverride,
      MuiPagination: MuiPaginationOverride,
      MuiPaginationItem: MuiPaginationItemOverride,
      MuiRadio: MuiRadioOverride,
      MuiRadioGroup: MuiRadioGroupOverride,
      MuiSelect: MuiSelectOverride,
      MuiSwitch: MuiSwitchOverride,
      MuiSkeleton: MuiSkeletonOverride,
      MuiStack: MuiStackOverride,
      MuiStep: MuiStepOverride,
      MuiStepConnector: MuiStepConnectorOverride,
      MuiStepContent: MuiStepContentOverride,
      MuiStepLabel: MuiStepLabelOverride,
      MuiStepper: MuiStepperOverride,
      MuiSvgIcon: MuiSvgIconOverride,
      MuiTabs: MuiTabsOverride,
      MuiTab: MuiTabOverride,
      MuiTextField: MuiTextFieldOverride,
      MuiToggleButton: MuiToggleButtonOverride,
      MuiToggleButtonGroup: MuiToggleButtonGroupOverride,
      MuiTooltip: MuiTooltipOverride,
      MuiTypography: MuiTypographyOverride,
    },
  });
};

export const theme = getTheme('dark');
