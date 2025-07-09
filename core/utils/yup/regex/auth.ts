export const EMAIL = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';
export const PASSWORD_ALLOWED_CHARS = '[a-z0-9!@#$%^&*()_+\\-=`~]+';
export const PASSWORD_VALIDATION_RULES = [/[a-z]/i, /[0-9]/, /[!@#$%^&*()_+\-=`~]/];

export const EMAIL_PATTERN = new RegExp(`^${EMAIL}$`);
export const PASSWORD_ALLOWED_CHARS_PATTERN = new RegExp(`^${PASSWORD_ALLOWED_CHARS}$`, 'i');

export const FOUR_DIGIT_YEAR = '\\d{4}';
export const TWO_DIGIT_YEAR = '\\d{2}';
export const MONTH_PATTERN = '(0[1-9]|1[0-2])';
export const DAY_PATTERN = '(0[1-9]|[12][0-9]|3[01])';

export const BIRTHDAY_PATTERN_WITH_YEAR = `${FOUR_DIGIT_YEAR}${MONTH_PATTERN}${DAY_PATTERN}`; // YYYYMMDD
export const BIRTHDAY_PATTERN_WITHOUT_YEAR = `${TWO_DIGIT_YEAR}${MONTH_PATTERN}${DAY_PATTERN}`; // YYMMDD
export const GENDER_IDENTIFIER = '[1-4]';
export const RANDOM_DIGITS = '\\d{6}';

export const RRN_START_WITH_YEAR_PATTERN = new RegExp(`^${BIRTHDAY_PATTERN_WITH_YEAR}$`);
export const RRN_START_WITHOUT_YEAR_PATTERN = new RegExp(`^${BIRTHDAY_PATTERN_WITHOUT_YEAR}$`);
export const RRN_END_PATTERN = new RegExp(`^${GENDER_IDENTIFIER}${RANDOM_DIGITS}$`);
export const RRN_FULL_WITH_HYPHEN_PATTERN = new RegExp(`^${BIRTHDAY_PATTERN_WITHOUT_YEAR}-${GENDER_IDENTIFIER}${RANDOM_DIGITS}$`);
export const RRN_FULL_WITHOUT_HYPHEN_PATTERN = new RegExp(`^${BIRTHDAY_PATTERN_WITHOUT_YEAR}${GENDER_IDENTIFIER}${RANDOM_DIGITS}$`);
export const RRN_FULL_WITHOUT_HYPHEN_NAMED_GROUP_PATTERN = new RegExp('^(?<start>\\d{6})(?<end>\\d{7})$');
