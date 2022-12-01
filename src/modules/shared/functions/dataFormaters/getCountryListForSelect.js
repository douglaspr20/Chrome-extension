export const getCountryListForSelect = (countries) => {
  if (countries) {
    const countryList = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(countries)) {
      const CountryObject = { label: value, key };
      countryList.push(CountryObject);
    }
    return countryList;
  }

  return [];
};
