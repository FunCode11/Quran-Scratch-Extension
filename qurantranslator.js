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
    let result;
    fetch(`http://api.alquran.cloud/v1/ayah/${args.SURAH}:${args.AYAH}/en.asad`)
    .then(res => res.json())
    .then(data => {
      result = data.data.text
    });
    return result
  }
}
Scratch.extensions.register(new Quran());
