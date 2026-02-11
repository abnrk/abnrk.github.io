var hosts = ["imgur.com","x.com","discord.com","rule34.xxx"];
function FindProxyForURL(url, host) {
  if(hosts.includes(host)) {
      return "PROXY 127.0.0.1:18080";
  }
  return "PROXY 127.0.0.1:5300";
}
