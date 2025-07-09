import styled from '@emotion/styled';

export const EditorContainer = styled.div`
  margin-left: 50px;

  && {
    .ce-block__content,
    .ce-toolbar__content {
      max-width: unset;
    }

    .codex-editor__redactor {
      padding-bottom: 0 !important;
    }

    .ce-popover-item-html {
      & > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /** align */
        & > div {
          margin-bottom: 5px;
          &:last-of-type {
            margin-right: 60px;
          }
        }
        /** header */
        & > span {
          &:last-of-type {
          }
        }
      }
    }

    .ce-popover-item__icon svg {
      width: initial;
      height: initial;
    }

    h1.ce-header {
      font-size: ${(props) => props.theme.typography['title/title1'].fontSize};
      line-height: ${(props) => props.theme.typography['title/title1'].lineHeight};
      letter-spacing: ${(props) => props.theme.typography['title/title1'].letterSpacing};
    }
    h2.ce-header {
      font-size: ${(props) => props.theme.typography['title/title2'].fontSize};
      line-height: ${(props) => props.theme.typography['title/title2'].lineHeight};
      letter-spacing: ${(props) => props.theme.typography['title/title2'].letterSpacing};
    }
    h3.ce-header {
      font-size: ${(props) => props.theme.typography['title/title3'].fontSize};
      line-height: ${(props) => props.theme.typography['title/title3'].lineHeight};
      letter-spacing: ${(props) => props.theme.typography['title/title3'].letterSpacing};
    }
    h4.ce-header {
      font-size: ${(props) => props.theme.typography['title/title4'].fontSize};
      line-height: ${(props) => props.theme.typography['title/title4'].lineHeight};
      letter-spacing: ${(props) => props.theme.typography['title/title4'].letterSpacing};
    }
    h5.ce-header {
      font-size: ${(props) => props.theme.typography['title/title5'].fontSize};
      line-height: ${(props) => props.theme.typography['title/title5'].lineHeight};
      letter-spacing: ${(props) => props.theme.typography['title/title5'].letterSpacing};
    }
  }
`;

export const EditorViewerContainer = styled.div`
  --selectionColor: #e1f2ff;
  --inlineSelectionColor: #d4ecff;
  --bg-light: #eff2f5;
  --grayText: #707684;
  --color-dark: #1d202b;
  --color-active-icon: #388ae5;
  --color-gray-border: rgba(201, 201, 204, 0.48);
  --content-width: 650px;
  --narrow-mode-right-padding: 50px;
  --toolbox-buttons-size: 26px;
  --toolbox-buttons-size--mobile: 36px;
  --icon-size: 20px;
  --icon-size--mobile: 28px;
  --block-padding-vertical: 0.4em;
  --color-line-gray: #eff0f1;
  --spacing-s: 8px;
  --spacing-xs: 6px;
  --list-counter-type: numeric;
  --radius-border: 5px;
  --checkbox-background: #fff;
  --color-border: #c9c9c9;
  --color-bg-checked: #369fff;
  --line-height: 1.45em;
  --color-bg-checked-hover: #0059ab;
  --color-tick: #fff;
  --size-checkbox: 1.2em;

  h1.ce-header {
    font-size: ${(props) => props.theme.typography['title/title1'].fontSize};
    line-height: ${(props) => props.theme.typography['title/title1'].lineHeight};
    letter-spacing: ${(props) => props.theme.typography['title/title1'].letterSpacing};
  }
  h2.ce-header {
    font-size: ${(props) => props.theme.typography['title/title2'].fontSize};
    line-height: ${(props) => props.theme.typography['title/title2'].lineHeight};
    letter-spacing: ${(props) => props.theme.typography['title/title2'].letterSpacing};
  }
  h3.ce-header {
    font-size: ${(props) => props.theme.typography['title/title3'].fontSize};
    line-height: ${(props) => props.theme.typography['title/title3'].lineHeight};
    letter-spacing: ${(props) => props.theme.typography['title/title3'].letterSpacing};
  }
  h4.ce-header {
    font-size: ${(props) => props.theme.typography['title/title4'].fontSize};
    line-height: ${(props) => props.theme.typography['title/title4'].lineHeight};
    letter-spacing: ${(props) => props.theme.typography['title/title4'].letterSpacing};
  }
  h5.ce-header {
    font-size: ${(props) => props.theme.typography['title/title5'].fontSize};
    line-height: ${(props) => props.theme.typography['title/title5'].lineHeight};
    letter-spacing: ${(props) => props.theme.typography['title/title5'].letterSpacing};
  }
  .ce-header {
    padding: 0.6em 0 3px;
    margin: 0;
    line-height: 1.25em;
    outline: none;
  }
  .ce-header p,
  .ce-header div {
    padding: 0 !important;
    margin: 0 !important;
  }

  .ce-paragraph {
    line-height: 1.6em;
    outline: none;
  }
  .cdx-block {
    margin: 1rem 0;
  }
  .ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,
  .ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty='true']:before {
    content: attr(data-placeholder-active);
  }
  .ce-paragraph p:first-of-type {
    margin-top: 0;
  }
  .ce-paragraph p:last-of-type {
    margin-bottom: 0;
  }

  .cdx-list {
    margin: 20px 0 !important;
    padding: 0;
    outline: none;
    display: grid;
    counter-reset: item;
    gap: var(--spacing-s);
    padding: var(--spacing-xs);
    padding-left: 20px;

    &.cdx-list-unordered > .cdx-list__item {
      list-style: disc;
    }
    &.cdx-list-ordered > .cdx-list__item {
      list-style: auto;
    }
    &.cdx-list-checklist {
      & > div {
        input[type='checkbox'] {
          border: 1px solid var(--color-gray-border) !important;
          border-radius: 4px;
        }
        input[type='checkbox']:checked {
          background: var(--color-bg-checked) !important;
          border: 1px solid var(--color-bg-checked) !important;
          &:after {
            content: 'v';
            font-weight: 600;
            color: white;
            position: absolute;
            top: 0px;
            left: 4px;
            font-size: 12px;
          }
        }
      }
    }
  }

  .tc-table {
    position: relative;
    width: 100%;
    font-size: 14px;
    border-top: 1px solid var(--color-border);
    border-left: 1px solid var(--color-border);
    line-height: 1.4;
    margin: 20px 0;
  }
  .tc-row {
    position: relative;
    border-bottom: 1px solid var(--color-border);
  }
  .tc-cell {
    border-right: 1px solid var(--color-border);
    padding: 6px 12px;
    overflow: hidden;
    outline: none;
    line-break: normal;
  }
  .tc-cell--header {
    font-weight: 800;
  }
`;
