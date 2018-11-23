import parseDomain from 'parse-domain';

function urlToVenueId(url) {
  const { domain, tld } = parseDomain(url);

  return `${domain}.${tld}`.replace(/[.-]/g, '_');
}

export default urlToVenueId;
