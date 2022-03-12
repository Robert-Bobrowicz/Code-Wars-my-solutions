//get the domain name from www address

function domainName(string) {
    return string.replace('www.', '').replace('http://', '').replace('https://', '').replace(/[/].*/, '').replace(/[.].*/, '');
}

console.log(domainName('https://github.com/mine_repository'));
console.log(domainName('http://github.com/mine_repository'));
console.log(domainName('https://mine.page.com/mine_repository'));
console.log(domainName('www.mine.page.com/mine_repository'));
