> [!IMPORTANT]
> Esta dependecia sigue en testeo, puede que haya varios errores!

> [!NOTE]
> Si quieres apoyar subiendo mas reacciones puedes unirte a nuestro discord
> https://discord.gg/kJYFTSjrHB

# Moka API

Este proyecto es para uso de bots de discord
Comandos como reacciones entre otras variantes.

### Install

```bash
npm install @shni/moka
```

### Usage

La dependecia fue creada en ts pero puede ser compilada en js, pero requieres tener activado los "imports".

```ts
import MokaAPI from "@shni/moka";

async function main() {
  const moka = new MokaAPI();

  try {
    const sipGif = await moka.getWave();
    console.log(sipGif);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
```

> [!WARNING]
> Estos metodos son de la version 1.1, no todos los metodos estan disponibles.

### Method GET

- sip
- wave
- airkiss
- angrystare
- bite
- bleh
- blush
- brofist
- celebrate
- cheers
- clap
- confused
- cool
- cry
- cuddle
- dance
- drool
- evillaugh
- facepalm
- handhold
- happy
- headbang
- hug
- huh
- kiss
- laugh
- lick
- love
- mad
- nervous
- no
- nom
- nosebleed
- nuzzle
- nyah
- pat
- peek
- pinch
- poke
- pout
- punch
- roll
- run
- sad
- scared
- shout
- shrug
- shy
- sigh
- slap
- sleep
- slowclap
- smack
- smile
- smug
- sneeze
- sorry
- stare
- stop
- surprised
- sweat
- thumbsup
- tickle
- tired
- wink
- woah
- yawn
- yay
- yes
