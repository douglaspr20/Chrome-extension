import styled from "styled-components";
import { Col, Row, Upload } from "antd";

export const FormInner = styled(Row)`
  .title-wrapper {
    margin-bottom: 30px;
  }

  .form-title {
    color: #141414;
    font-weight: 700;
    font-size: 24px;
    display: block;
  }

  .form-sub-title {
    color: #666666;
    font-size: 12px;
    display: block;
  }

  .company-logo-uploader {
    .ant-upload {
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
    }
  }

  .inner-section__title {
    margin: 0;
    margin-bottom: 16px;
  }

  &.d-flex-inline {
    display: inline-flex;
  }

  h4 {
    color: ${(props) => props.theme.colors.grey900};
    font-size: ${(props) => props.theme.typography.bodyText};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    text-rendering: optimizeLegibility;
    margin-top: 18px;
    margin-bottom: 5px;
    letter-spacing: ${(props) => props.theme.letterSpacing.spacing1};
  }

  &.create-company_form .inner-section__title h4 {
    font-size: ${(props) => props.theme.typography.header2};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`;

export const InputWrapper = styled(Col)<{ $antFormItemMargin: string }>`
  .border-round {
    border-radius: 50px;
  }

  &.d-flex-align-items-center {
    display: flex;
    align-items: center;
  }
  .ant-input-group-addon {
    color: #141414;
  }
  &.dynamic-input .ant-input-group-addon {
    font-size: ${(props) => props.theme.typography.formLabel};
    background: ${(props) => props.theme.colors.white};
    min-width: 140px;
  }

  &.dynamic-input .ant-input {
    border-radius: 4px 0 0 4px !important;
    color: ${(props) => props.theme.colors.grey900};
    font-size: ${(props) => props.theme.typography.bodyText};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  &.rate-input .ant-input-affix-wrapper-lg,
  &.rate-input .ant-input-prefix {
    width: 15%;
    background: ${(props) => props.theme.colors.coolGrey100};
  }

  &.rate-input .ant-input,
  &.rate-input .anticon {
    display: block;
    margin: 0 auto;
  }

  &.social-handle .ant-input {
    padding-left: 20px;
  }

  &.social-handle .ant-input-affix-wrapper-lg {
    padding: 0;
  }

  &.social-handle .ant-input-prefix {
    background: ${(props) => props.theme.colors.grey100};
    padding-left: 28px;
    padding-right: 28px;
    border-right: 1px solid ${(props) => props.theme.colors.grey200};
  }

  &.social-handle .ant-input-prefix .anticon {
    margin-right: 20px;
    margin-top: 2px;
    color: ${(props) => props.theme.colors.grey800};
  }

  &.social-handle .ant-input-prefix span {
    color: ${(props) => props.theme.colors.grey};
  }

  &.gallery_wrapper .ant-form-item-label {
    margin: 16px 0;
    color: ${(props) => props.theme.colors.grey900};
    font-size: ${(props) => props.theme.typography.formLabel};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    text-transform: uppercase;
    content: "";
  }

  &.gallery_wrapper .ant-upload.ant-upload-btn {
    height: 200px;
  }

  &.gallery_wrapper .ant-upload-drag {
    margin-bottom: 20px;
  }

  &.gallery_wrapper .ant-upload-list-picture-card .ant-upload-list-item {
    padding: 0;
  }

  &.gallery_wrapper .ant-upload-list-picture-card-container {
    width: 140px;
    height: 140px;
  }

  .ant-form-item-label > label {
    font-style: normal;
    font-size: ${(props) => props.theme.typography.formLabel};
    line-height: 100%;
    color: ${(props) => props.theme.colors.grey600};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    letter-spacing: ${(props) => props.theme.letterSpacing.spacing1};
    margin-bottom: 8px;
  }

  .ant-picker {
    border-radius: 4px;
    border: 1px solid #e9e9e9;
  }

  .ant-form-item-label {
    padding: 0;
  }

  .ant-form-item {
    margin-bottom: ${(props) => props.$antFormItemMargin || "24px"};
  }

  .dynamic-select {
    width: 100% !important;
    position: relative;
  }

  .ant-input-group-compact .ant-select-single .ant-select-selector {
    background: ${(props) => props.theme.colors.grey100};
    border: 1px solid ${(props) => props.theme.colors.grey200};
    padding: 0 32px;
    border-radius: 0 4px 4px 0;
  }

  .ant-input-group-compact .ant-input-lg,
  .ant-input-group-compact .ant-picker {
    border: 1px solid ${(props) => props.theme.colors.grey200};
    //border-radius: 0 4px 4px 0;
    //border-radius: 10px;
  }

  .ant-input-group.ant-input-group-compact {
    display: flex !important;
  }

  .ant-input-group-compact label {
    display: flex;
    width: 100%;
  }

  .dynamic-select .ant-select-selection-item,
  .ant-input-group-compact .ant-select-single .ant-select-selector,
  .ant-input-group-compact
    .ant-select-single
    .ant-select-selector
    .ant-select-selection-item,
  .ant-input-group-compact .ant-picker {
    height: 48px;
    line-height: 48px;
  }

  .ant-input-group-compact .ant-picker {
    padding: 0 20px;
    //border-radius: 0 4px 4px 0;
    border-left: none;
    width: 100%;
  }

  .dynamic-select,
  .ant-select-selector {
    min-height: 48px;
    border-color: ${(props) => props.theme.colors.grey300} !important;
  }

  &.dynamic-inputs.ant-input-group-wrapper .ant-input {
    border-radius: 4px 0 0 4px !important;
  }

  &.dynamic-inputs.ant-input-group input {
    min-height: 48px;
    border-radius: 4px 0 0 4px !important;
    color: ${(props) => props.theme.colors.grey900};
    font-size: ${(props) => props.theme.typography.bodyText};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  &.dynamic-inputs.ant-input-group-addon {
    min-width: 150px !important;
  }

  .ant-form-item-control-input,
  .ant-form-item-control-input-content,
  .ant-form-item-control-input-content .ant-input-lg {
    min-height: 48px;
    border-radius: 4px 0 0 4px;
    font-style: normal;
    font-weight: ${(props) => props.theme.fontWeight.regular};
    letter-spacing: ${(props) => props.theme.letterSpacing.spacing2};
    font-size: ${(props) => props.theme.typography.bodyText};
    line-height: 120%;
    color: ${(props) => props.theme.colors.grey800};
  }

  .ant-form-item-control-input::placeholder,
  .ant-form-item-control-input-content::placeholder,
  .ant-form-item-control-input-content .ant-input-lg::placeholder,
  .ant-select-selection-placeholder {
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  .form-inner__select .ant-select-selector,
  .form-inner__select .ant-select-selector {
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.grey300};
  }

  .form-inner__select .ant-select-selection-item {
    line-height: 48px;
  }

  .form-inner__select.form-inner_select_auto-h {
    height: auto;
  }

  .form-inner__select.form-inner_select_auto-h .ant-select-selector {
    height: auto;
    min-height: 48px;
  }

  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 48px;
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  .form-inner__select.ant-select-multiple .ant-select-selection-item {
    line-height: 100% !important;
    font-size: ${(props) => props.theme.typography.caption};
    padding: 4px 8px;
    margin-left: 4px;
    color: ${(props) => props.theme.colors.grey800};
    background: ${(props) => props.theme.colors.coolGrey200};
  }

  .ant-picker {
    height: 48px;
  }

  .company-logo_wrapper .ant-upload-select-picture-card,
  .company-logo_wrapper .ant-upload-list-item-list-type-picture-card {
    border-radius: 50%;
  }

  .company-logo_wrapper.logo-uploaded
    .ant-upload-select.ant-upload-select-picture-card {
    display: none;
  }

  .ant-input-affix-wrapper,
  .ant-input {
    border: 1px solid ${(props) => props.theme.colors.grey300};
    border-radius: 4px;
  }

  .email-edit-button-wrapper {
    background-color: #f2f2f2;
    width: 28px;
    height: 28px;
    border-radius: 100px !important;
    border: none;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 7px;
    position: absolute;
    top: 37px;
    right: 0;
  }

  .input-title {
    color: #666666;
    display: block;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 1px;

    &.title-channels {
      letter-spacing: 1.3px;
      font-size: 10px;
      font-weight: 700;
    }
  }

  .input-title-tag {
    color: #979797;
    font-size: 12px;
    line-height: 140%;
    text-align: right;
    letter-spacing: 0.02em;
  }

  .field-type-remove-btn {
    border: none;
    margin-left: 10px;
  }

  .input-field-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-wrapper-custom-styles {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .ant-row {
    width: 100%;
  }
`;

export const ButtonWrapper = styled(Col)<{ $top: string }>`
  text-align: right;
  position: absolute;
  top: ${(props) => props.$top || 61}px;
  right: 30px;

  .tab-content__save {
    width: 185px;
    border-radius: 4px;
    border-color: #f99b17;
    border-width: 2px;
    font-size: 13px;
    z-index: 100;
    color: #323232;

    &:hover {
      background: #fc4a1a; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to left,
        #f7b733,
        #fc4a1a
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to left,
        #f7b733,
        #fc4a1a
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
  }

  &.model-inner_button {
    top: 45px;
  }

  padding-right: 32px;
`;

export const FormSectionSubTitle = styled.p`
  color: #666666;
  font-size: 12px;
  margin-top: -24px;
`;

export const UploadWrapper = styled(Upload)`
  img {
    border: 2px solid #e5e5e5;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const GroupSearchSelectWrapper = styled.div`
  margin-bottom: 4px;
  margin-top: 4px;
  height: auto;
  overflow: hidden;

  .ant-form-item.no-items {
    height: 0;
    overflow: hidden;
  }

  .ant-select {
    margin-bottom: -2px;
  }

  &.with-add-new-button {
    .ant-select-selector {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
