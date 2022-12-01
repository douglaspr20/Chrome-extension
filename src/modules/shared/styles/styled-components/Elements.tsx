import styled from "styled-components";
import {
  Avatar,
  Card,
  List,
  PageHeader,
  Pagination,
  Row,
  Table,
  Upload,
  Steps,
} from "antd";

const { Step } = Steps;

export const AppGlobalStyles = styled.div`
  height: 100%;

  .relationship-type.customer {
    background: ${(props) => props.theme.companyTypes.customer};
  }

  .relationship-type.prospect {
    background: ${(props) => props.theme.companyTypes.prospect};
  }

  .relationship-type.partner {
    background: ${(props) => props.theme.companyTypes.partner};
  }

  .relationship-type.lead {
    background: ${(props) => props.theme.companyTypes.lead};
  }

  .relationship-type.company {
    background: ${(props) => props.theme.companyTypes.company};
  }

  .ant-pagination-item,
  .ant-pagination-item-link {
    border: none;
    min-width: 15px;
    background: none;
  }

  .ant-table-column-title {
    color: #ffffff;
  }

  .ant-pagination-item {
    a {
      color: ${(props) => props.theme.colors.paleSky};
    }

    &.ant-pagination-item-active {
      a {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  .ant-pagination {
    justify-content: flex-start;
    display: flex;
  }
`;

export const AvatarWrapper = styled(Avatar)`
  padding: 2px;
  background: ${(props) => props.theme.gradients.primary};

  img {
    border-radius: 100%;
  }
`;

export const FilterBarWrapper = styled(Row)`
  padding-bottom: 20px;

  .delete-btn {
    background-color: #cf2f2f;
    border-radius: 4px;
    font-weight: 700;
    font-size: 13px;
    line-height: 100%;
    color: #ffffff;
  }

  .ant-select-single .ant-select-arrow {
    left: 12px !important;
    right: auto !important;
  }

  .ant-input {
    font-size: 13px;
  }

  .search-icon {
    svg {
      width: 17.05px;
      height: 17.05px;
    }
  }

  .ant-select-selection-search-input {
    padding-left: 25px !important;
  }

  .ant-select-arrow {
    width: 100%;

    .filter-icon {
      width: 100%;
      margin-left: -11px;
      display: flex;
      padding: 0 13px;

      .left-icon {
        flex: 1;
        text-align: left;

        svg {
          width: 15px;
          height: 10px;
        }
      }
    }
  }

  .ant-select-single .ant-select-selector,
  .ant-input-affix-wrapper {
    border-radius: 3px;
  }

  .ant-select-single .ant-select-selection-placeholder,
  .ant-select-single .ant-select-selection-item {
    padding-left: 24px !important;
    padding-right: 5px !important;
    line-height: 35px !important;
    font-size: ${(props) => props.theme.typography.formLabel};
  }

  .ant-picker {
    margin-top: 1px;
    padding: 8px 16px 8px 8px;
  }
`;

export const TopButtonWrapper = styled.div`
  margin-bottom: 32px;
  margin-top: -64px;
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  align-items: stretch;

  .ant-btn {
    max-width: 185px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    line-height: 48px;
    padding: 0;
  }
`;

export const OnboardingWrapper = styled.div`
  width: 80%;
  padding: 10px 30px;

  .ant-steps {
    display: none;
  }

  .ant-form-item-control-input-content {
    border-radius: 0;
    height: 45px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    background-color: rgba(255, 255, 255, 0.1);
  }

  .ant-form-item-label {
    font-size: 12px;
    color: #6b7280;
    letter-spacing: 0.4px;
  }

  .ant-input-lg,
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none !important;
  }

  .ant-form-item-control-input-content:focus,
  .form-inner__select:focus,
  .ant-form-item-control-input-content:not(.ant-input-affix-wrapper-disabled):hover {
    border: none;
    border-bottom: 1px solid #f1a051;
    box-shadow: none !important;
  }

  .ant-input {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .ant-form {
    margin-top: 30px;
  }

  .heading_wrapper {
    margin: 30px 0;
  }

  .heading_wrapper h3 {
    font-size: 24px;
  }

  .heading_wrapper span {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const DataCard = styled(Card)`
  background: #f2f2f2;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.05);
`;

export const ProfileCard = styled.div`
  padding: 30px;

  .ant-tag {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    border: none;
    padding: 1px 30px;
    color: ${(props) => props.theme.colors.white};
  }

  .open_to_work {
    background: linear-gradient(90deg, #22b781 0%, #39ccaf 100%);
  }

  h2 {
    margin-bottom: 5px;
    font-size: ${(props) => props.theme.typography.header2};
  }

  h5 {
    font-size: ${(props) => props.theme.typography.formLabel};
    margin-top: 0 !important;
    letter-spacing: ${(props) => props.theme.letterSpacing.spacing2};
    text-transform: uppercase;
    font-weight: ${(props) => props.theme.fontWeight.regular};
    color: ${(props) => props.theme.colors.coolGrey300};
  }
`;

export const UploadWrapper = styled(Upload)`
  margin: 0;

  .ant-upload {
    box-shadow: none !important;
    border: 2px solid #e5e5e5;
    background-color: #dfdfdf;
    color: #c1c1c1;

    :hover {
      background-color: #666;
      color: white;
    }
  }

  .ant-upload-list-item {
    border: 2px solid #e5e5e5;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
    border-radius: 100px;
    padding: 1px;
  }

  .ant-upload-select {
    border: none;
    box-shadow: none;
  }

  .company-logo-uploader {
    box-shadow: none;
  }

  &.logo-uploaded .ant-upload-select-picture-card {
    display: none;
  }

  .ant-upload-list-item-image {
    border-radius: 50%;
    background-color: #4dc71f;
  }
`;

export const ProfileActions = styled.div`
  padding: 10px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.dropShadows.ds1};
  font-size: ${(props) => props.theme.typography.formLabel};

  button {
    display: block;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.grey700};
  }

  button .anticon {
    padding: 8px;
    background: ${(props) => props.theme.colors.grey200};
    border-radius: 50%;
  }
`;

export const UserWorkExperienceWrapper = styled(List.Item)`
  .company-logo-spin-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .ant-list-item-meta-content h4 {
    margin-top: 5px !important;
    font-size: ${(props) => props.theme.typography.bodyText};
    line-height: 150%;
    color: ${(props) => props.theme.colors.grey900};
    letter-spacing: ${(props) => props.theme.letterSpacing.spacing2};
  }

  .ant-list-item-meta-description {
    font-size: ${(props) => props.theme.typography.smallText};
    line-height: 150%;
    color: ${(props) => props.theme.colors.grey600};
    letter-spacing: ${(props) => props.theme.letterSpacing.spacing2};
  }

  .ant-list-item-main {
    font-size: ${(props) => props.theme.typography.formLabel};
    line-height: 150%;
    color: ${(props) => props.theme.colors.grey600};
    letter-spacing: ${(props) => props.theme.letterSpacing.spacing2};
  }

  .ant-list-item-action {
    opacity: 0;
    position: absolute !important;
    right: 0 !important;
    height: 100% !important;
    top: 0 !important;
    margin-top: 0 !important;
    display: flex !important;
    align-items: center;
    margin-right: -10px;

    li:first-child {
      padding-left: 10px;
      padding-right: 0;
    }

    li:last-child {
      padding-left: 10px;
    }

    button {
      background-color: ${(props) => props.theme.colors.grey200};
    }
  }

  &:hover .ant-list-item-action {
    opacity: 1;
    display: block;
  }
`;

export const ListTable = styled(Table)`
  .ant-table table {
    border-spacing: 0 5px;
  }
}

.ant-table table {
  border-spacing: 0 5px;
}

.ant-table {
  background: transparent;
}

.ant-table-container {
  background-color: transparent;
}

  .ant-checkbox-wrapper .ant-checkbox-inner {
    border-radius: 4px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: ${(props) => props.theme.userTypes.vendor};
    background-color: ${(props) => props.theme.userTypes.vendor};
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${(props) => props.theme.userTypes.vendor};
  }

  .ant-table-content {
    border-color: transparent;
  }

  .clickable-item {
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.02em;
  }

  .user-profile, {
    color: ${(props) => props.theme.colors.accentClickableUser};
  }

  .user-profile .anticon {
    margin-right: 10px;
  }

  .ant-table-thead tr {
    background-color: #5f5c5c;
    border-radius: 4px;
  }

  .ant-table-thead .ant-table-cell {
    background: transparent;
    color: #fff;
    font-size: 15px;
  }
  
.ant-table-thead .ant-table-cell {
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.typography.bodyText} !important;
  font-weight: ${(props) => props.theme.fontWeight.bold} !important;
  line-height: 120%;
  letter-spacing: ${(props) => props.theme.letterSpacing.spacing2} !important;
}

.associated-company {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  color: #455fe5;
  display: flex;
  align-items: center;
}

.more-roles {
  margin-left: 10px;
}

.associated-user {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  color: #455fe5;
  margin-top: 5px;
  display: flex;
  align-items: center;

  .associated-user-name {
    margin-left: 10px;
    color: #455fe5;
    font-size: 14px;
    font-weight: 700;
  }
}

.table-logo {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  margin-right: 10px;
}

.table-logo-account-lead {
  border-radius: 100%;
  width: 24px;
  height: 24px;
  margin: 5px;
}

.account-no-lead-name {
  color: #c4c4c4;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.02em;
  padding: 10px;
}

.account-lead-name {
  color: #455fe5;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.02em;
  padding: 10px;
}

.case-study-name {
  color: #455fe5;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.02em;
}

  .ant-table-cell .ant-dropdown-trigger {
    border: none;
  }
.document-name {
  color: #455fe5;
  font-weight: 900;
  font-size: 15px;
  line-height: 120%;
  letter-spacing: 0.02em;
}

.document-type {
  color: #979797;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
}

.ant-checkbox-wrapper .ant-checkbox-inner {
  border-radius: 6px;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: 1px solid #b2b2b2;
}

.account-lead-name {
  color: #455fe5;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  align-items: center;
  letter-spacing: 0.02em;
  padding: 10px;
}

.ant-checkbox-checked .ant-checkbox-inner {
  border-color: ${(props) => props.theme.userTypes.vendor};
  background-color: ${(props) => props.theme.userTypes.vendor};
}

.ant-checkbox-indeterminate .ant-checkbox-inner::after {
  background-color: ${(props) => props.theme.userTypes.vendor};
}

  &.ant-table-wrapper .associated-company {
    color: ${(props) => props.theme.accents.company};
  }
.ant-table-content {
  border-color: transparent;
}

.clickable-item {
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0.02em;
}

  &.ant-table-wrapper .company-name {
    color: ${(props) => props.theme.colors.primary};
  }
.user-profile {
  color: ${(props) => props.theme.colors.accentClickableUser};
}

.user-profile .anticon {
  margin-right: 10px;
}

.ant-table-thead tr {
  background-color: #5f5c5c;
  border-radius: 4px;
}

  &.companies-table .ant-tag.relationship-type {
    font-size: ${(props) => props.theme.typography.caption};
    padding: 8px 16px;
    text-align: center;
    font-style: normal;
    box-sizing: border-box;
    font-weight: 400;
    line-height: 100%;
    text-rendering: optimizeLegibility;
    min-width: 90px;
    border-radius: 16px;
    border: none !important;
    color: ${(props) => props.theme.colors.white};
  }
.ant-table-thead .ant-table-cell {
  background: transparent;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
}

th.ant-table-cell-ellipsis {
  padding-left: 26px;
}

.ant-table-tbody > tr {
  background-color: #fff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 7%), 0 2px 3px rgb(0 0 0 / 10%);
}

.ant-table-thead .ant-table-cell {
  font-size: 15px !important;
}

.ant-table-tbody > tr > td {
  background-color: transparent;
  color: #979797;
  font-weight: 400;
  font-size: 14px;
  border-bottom: none !important;
}

.ant-table-tbody > tr.ant-table-row-selected,
.ant-table-tbody > tr.ant-table-row-selected:hover {
  background-color: #e5e7eb;
}

.ant-table-cell .ant-dropdown-trigger {
  border: none;
  color: #979797;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
}

.ant-table-tbody > tr.ant-table-row-selected:hover > td {
  background-color: transparent;
}

.ant-tag {
  font-size: ${(props) => props.theme.typography.caption};
  padding: 8px 16px;
  text-align: center;
  font-style: normal;
  box-sizing: border-box;
  font-weight: 700;
  line-height: 100%;
  text-rendering: optimizeLegibility;
  min-width: 90px;
  border-radius: 16px;
  color: ${(props) => props.theme.colors.white};

}

&.ant-table-wrapper .account-lead {
  color: ${(props) => props.theme.colors.accentUser};
}

&.ant-table-wrapper .account-lead .anticon {
  margin-right: 10px;
}

&.ant-table-wrapper {
  color: ${(props) => props.theme.accents.company};
}

&.ant-table-wrapper .associated-company .anticon {
  margin-right: 10px;
}

&.ant-table-wrapper {
  color: ${(props) => props.theme.colors.primary};
}

&.companies-table .ant-tag.status-tag {
  border: none;
  background: none;
  position: relative;
  text-align: left;
  padding-left: 20px;
  color: ${(props) => props.theme.colors.grey600};
}

&.companies-table .ant-tag.status-tag::before {
  content: '';
  padding: 1px;
  height: 12px;
  width: 12px;
  position: absolute;
  border-radius: 50%;
  left: 0;
  top: 8px;
}

&.companies-table .ant-tag.relationship-type {
  font-size: ${(props) => props.theme.typography.caption};
  padding: 8px 16px;
  text-align: center;
  font-style: normal;
  box-sizing: border-box;
  font-weight: 700;
  line-height: 100%;
  text-rendering: optimizeLegibility;
  min-width: 90px;
  border-radius: 17px;
  border: none !important;
  color: ${(props) => props.theme.colors.white};
  width: 110px;
}


&.companies-table .ant-tag.status-tag.Active::before {
  background: ${(props) => props.theme.gradients.success};
}

&.companies-table .ant-tag.status-tag.Inactive::before {
  background: ${(props) => props.theme.gradients.error};
}


.ant-select-selector {
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
  border-bottom: 1px solid;
  border-radius: 0 !important;
  border-color: #979797 !important;
}

span {
  font-size: 15px;
  color: #979797;
  letter-spacing: 1px;
}

.user-profile {
  span {
    color: #455fe5;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0;
  }
}
`;

export const CustomListTable = styled(ListTable)`
  .ant-table {
    margin-bottom: 47.5px;
  }

  &.matches-table .ant-tag.sync-status-type {
    font-size: ${(props) => props.theme.typography.bodyText};
    padding: 8px 16px;
    text-align: center;
    font-style: normal;
    box-sizing: border-box;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-rendering: optimizeLegibility;
    min-width: 90px;
    border-radius: 16px;
    border: none !important;
    color: ${(props) => props.theme.colors.white};
  }

  &.matches-table .ant-tag.sync-status-type.synced {
    background-color: ${(props) => props.theme.matchesTypes.synced};
  }

  &.matches-table .ant-tag.sync-status-type.unsynced {
    background-color: ${(props) => props.theme.matchesTypes.unSynced};
  }

  .ant-table-tbody > tr.row-dragging {
    display: table;
    background: #f2f2f2;
  }
`;

export const InnerPageHeader = styled(PageHeader)`
  &.create-company__header {
    margin-bottom: 32px;
  }

  &.create-company__header .ant-page-header-heading-title {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.typography.regular};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  &.create-company__header .ant-page-header-back svg {
    fill: ${(props) => props.theme.colors.primary} !important;
  }
`;

export const StyledPagination = styled(Pagination)`
  margin: 32px 0 0;
`;

export const StepsWrapper = styled(Steps)`
  display: flex;
  flex-flow: row wrap;
`;

export const SingleStep = styled(Step)`
  flex: 0 0 33.33333333% !important;
  max-width: 33.33333333%;
`;

export const CaseStudiesCardInner = styled(Card)`
  .card-cover {
    position: relative;
  }

  .user-name-and-title-wrapper {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }

  .user-name {
    display: block;
    color: #ffffff;
    font-size: ${(props) => props.theme.typography.bodyText};
    font-weight: 700;
  }

  .user-title {
    display: block;
    color: #ffffff;
    font-size: ${(props) => props.theme.typography.smallText};
  }

  .user-avatar {
    width: 100%;
    height: 136px;
    object-fit: cover;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.15));
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .user-detail {
    margin-top: 28px;
    display: block;
    text-align: center;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.typography.bodyText};
    color: #949494;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .card-buttons-wrapper {
    position: absolute;
    top: 290px;
    left: calc(50% - 40px);
    display: flex;
    grid-template-columns: auto auto auto auto;
  }

  .card-button {
    border-radius: 57px;
    width: 14px;
    height: 14px;
    padding: 0;
    border-width: 0;
    margin-right: 10px;
    margin-left: 10px;

    svg {
      width: 14px;
      height: 14px;
      margin-bottom: -1px;
      //left: calc(50% - 40px);
      color: #455fe5;
    }
  }

  .card-button-icon {
    color: #6ba7f6;
  }

  margin-top: 16px;
  margin-bottom: 24px;
  margin-right: 36px;
  width: 100%;
  height: 340px;
  border-radius: 4px;
`;

export const LeadershipCardInner = styled(Card)`
  .card-date {
    display: block;
    font-size: ${(props) => props.theme.typography.smallText};
    color: ${(props) => props.theme.colors.grey600};
    margin-left: 8px;
  }

  .card-title {
    display: block;
    font-size: ${(props) => props.theme.typography.regular};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: 110%;
    letter-spacing: 0.02em;
    color: ${(props) => props.theme.colors.primary};
  }

  .card-content {
    margin: 16px 8px 8px 8px;
  }

  .card-avatar {
    width: 100%;
    height: 128px;
    object-fit: cover;
    border-radius: 0;
    padding: 8px;
  }

  .card-description {
    font-size: ${(props) => props.theme.typography.caption};
    line-height: 140%;
    letter-spacing: 0.02em;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.grey600};
  }

  margin-top: 16px;
  margin-bottom: 24px;
  margin-right: 36px;
  width: 200px;
  height: 339px;
  box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.03), 4px 4px 8px rgba(0, 0, 0, 0.03);
  border-radius: 0;
`;

export const TableColumnWithIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 20px;

  .user-outlined-icon {
    padding-left: 22.5%;
    color: #ffffff !important;
  }
`;
