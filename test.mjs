const keytar = await import('./lib/keytar.js');

await keytar.default.findPassword('test');
