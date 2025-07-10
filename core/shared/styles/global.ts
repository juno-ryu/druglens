import { css } from '@emotion/react';

import { EnumLanguageCode } from '@/shared/consts/common/language';

export const globalStyles = (lang: EnumLanguageCode) => css`
  html,
  body,
  body * {
    word-wrap: break-word;
    word-break: normal;
    overflow-wrap: anywhere;
    white-space: normal;
    -webkit-text-size-adjust: 100%;
    -webkit-text-size-adjust: none;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    overflow-x: hidden;
  }
  body,
  body * {
    font-family: ${lang === EnumLanguageCode.ZH
      ? 'arial, "pingfang sc", "microsoft yahei" !important'
      : lang === EnumLanguageCode.JA
        ? '"Pretendard JP Variable", Pretendard JP !important'
        : '"Pretendard Variable", Pretendard !important'};
  }

  body *,
  body *:after,
  body *:before {
    box-sizing: border-box;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }
  button {
    display: inline-block;
    padding: 0;
    border-radius: 0;
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  label {
    cursor: pointer;
  }
  input,
  select,
  textarea {
    width: 100%;
    background: none;
    border: none;
    box-shadow: none;
    outline: none;
    appearance: none;
    &:disabled,
    &:read-only {
      cursor: default;
    }
  }
  input {
    &[type='button'],
    &[type='reset'],
    &[type='submit'] {
      cursor: pointer;
    }
    &::placeholder {
      opacity: 1;
    }
  }
  select {
    &::-ms-expand {
      display: none;
    }
  }

  table {
    width: 100%;
    table-layout: fixed;
    th,
    td {
      text-align: left;
    }
  }

  .sr-only {
    position: absolute !important;
    margin: -1px !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    border: 0 !important;
    clip: rect(0, 0, 0, 0) !important;
    overflow: hidden !important;
    white-space: nowrap !important;
  }

  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  .disabled-wrapper {
    position: relative;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: white;
      opacity: 0.5;
      z-index: 1;
    }
  }

  .noscroll {
    overflow: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .hidden {
    display: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }
`;
