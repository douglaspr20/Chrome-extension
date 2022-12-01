interface FormatURLArgs {
  url: string;
}

export const formatURL = ({ url }: FormatURLArgs): string => {
  let formattedURL = url;

  if (!/^https?:\/\//i.test(url)) {
    formattedURL = `https://${url}`;
  }

  return formattedURL;
};
