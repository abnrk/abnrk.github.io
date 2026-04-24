var hosts = ["i.imgur.com","x.com","discord.com","rule34.xxx","itch.io"];
function FindProxyForURL(url, host) {
  if(hosts.includes(host) || shExpMatch(host,"*.itch.io")) {
      return "PROXY 127.0.0.1:8118";
  }
  return "DIRECT";
}
