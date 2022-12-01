import { Amplify } from "aws-amplify";

Amplify.configure({
  Analytics: {
    disabled: true,
  },
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_PUBLIC_AWS_REGION,
    userPoolId: process.env.REACT_PUBLIC_AWS_USER_POOL_ID,
    identityPoolId: process.env.REACT_PUBLIC_AWS_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_PUBLIC_AWS_USER_POOL_CLIENT_ID,
    federationTarget: "COGNITO_USER_AND_IDENTITY_POOLS",
    mfaConfiguration: "OFF",
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
  Storage: {
    bucket: process.env.REACT_PUBLIC_AWS_S3_BUCKET,
    region: process.env.REACT_PUBLIC_AWS_REGION,
    identityPoolId: process.env.REACT_PUBLIC_AWS_IDENTITY_POOL_ID,
  },
});
