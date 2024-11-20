> [!IMPORTANT]
> Esta dependecia sigue en testeo, puede que haya varios errores!

# Moka API

Este proyecto es para uso de bots de discord
Comandos como reacciones entre otras variantes.

### Install

```
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
> Estos metodos son de la version 1.0.10

### Method GET

- sip
- wave
