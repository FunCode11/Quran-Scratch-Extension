class Quran {
  getInfo() {
    return {
      id: 'quran', // change this if you make an actual extension!
      name: 'Quran',
      blocks: [
        {
          opcode: 'quran',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ayah: [AYAH] Surah: [SURAH]',
          arguments: {
            AYAH: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            },
            SURAH: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        }
      ]
    };
  }
  quran(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return fetch(`http://api.alquran.cloud/v1/ayah/${args.SURAH}:${args.AYAH}/en.asad`)
    .then(res => res.json())
    .then(data => data.data.text);
  }
}
Scratch.extensions.register(new Quran());
