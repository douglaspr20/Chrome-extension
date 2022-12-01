import { css } from 'styled-components';

export const userRoleTagColors = css`
  &.more-roles {
    width: 24px !important;
    min-width: 24px !important;
    border: none;
    color: #666666;
    padding: 0;
    height: 24px;
    line-height: 30px;
    background-color: #fafafa;
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &.inactive {
    border: ${(props) => props.theme.colors.coolGrey300};
    background: ${(props) => props.theme.colors.coolGrey300};
  }

  &.chameleon {
    border: ${(props) => props.theme.userTypes.chameleon};
    background: ${(props) => props.theme.userTypes.chameleon};
  }

  &.vendor {
    border: ${(props) => props.theme.userTypes.vendor};
    background: ${(props) => props.theme.userTypes.vendor};
  }

  &.employee {
    border: ${(props) => props.theme.userTypes.employee};
    background: ${(props) => props.theme.userTypes.employee};
  }

  &.superAdmin {
    border: ${(props) => props.theme.userTypes.superAdmin};
    background: ${(props) => props.theme.userTypes.superAdmin};
  }

  &.advisor {
    border: ${(props) => props.theme.userTypes.advisor};
    background: ${(props) => props.theme.userTypes.advisor};
  }

  &.partner {
    border: ${(props) => props.theme.userTypes.partner};
    background: ${(props) => props.theme.userTypes.partner};
  }
  &.employee {
    border: ${(props) => props.theme.userTypes.employee};
    background: ${(props) => props.theme.userTypes.employee};
  }
  &.candidate {
    border: ${(props) => props.theme.userTypes.candidate};
    background: ${(props) => props.theme.userTypes.candidate};
  }
  &.solutionPartner {
    border: ${(props) => props.theme.userTypes.solutionPartner};
    background: ${(props) => props.theme.userTypes.solutionPartner};
  }
  &.referralPartner {
    border: ${(props) => props.theme.userTypes.referralPartner};
    background: ${(props) => props.theme.userTypes.referralPartner};
  }
`;

export const companyRoleTagColors = css`
  &.vendor {
    border: ${(props) => props.theme.companyTypes.vendor};
    background: ${(props) => props.theme.companyTypes.vendor};
  }

  &.company {
    border: ${(props) => props.theme.companyTypes.company};
    background: ${(props) => props.theme.companyTypes.company};
  }

  &.lead {
    border: ${(props) => props.theme.companyTypes.lead};
    background: ${(props) => props.theme.companyTypes.lead};
  }

  &.customer {
    border: ${(props) => props.theme.companyTypes.customer};
    background: ${(props) => props.theme.companyTypes.customer};
  }

  &.prospect {
    border: ${(props) => props.theme.companyTypes.prospect};
    background: ${(props) => props.theme.companyTypes.prospect};
  }

  &.partner {
    border: ${(props) => props.theme.companyTypes.partner};
    background: ${(props) => props.theme.companyTypes.partner};
  }
  &.solutionPartner {
    border: ${(props) => props.theme.userTypes.solutionPartner};
    background: ${(props) => props.theme.userTypes.solutionPartner};
  }
`;

export const invoiceStatusTagNames = css`
  &.paid {
    border: ${(props) => props.theme.invoiceStatusTypes.paid};
    background-color: ${(props) => props.theme.invoiceStatusTypes.paid};
  }

  &.unpaid {
    border: ${(props) => props.theme.invoiceStatusTypes.unpaid};
    background-color: ${(props) => props.theme.invoiceStatusTypes.unpaid};
  }

  &.draft {
    border: ${(props) => props.theme.invoiceStatusTypes.unpaid};
    background-color: ${(props) => props.theme.invoiceStatusTypes.unpaid};
  }

  &.submitted {
    border: ${(props) => props.theme.invoiceStatusTypes.unpaid};
    background-color: #2991b6;
  }

  &.approved {
    border: ${(props) => props.theme.invoiceStatusTypes.unpaid};
    background-color: ${(props) => props.theme.invoiceStatusTypes.unpaid};
  }

  &.rejected {
    border: ${(props) => props.theme.invoiceStatusTypes.unpaid};
    background-color: #d93333;
  }
`;
