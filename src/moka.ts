export class MokaAPI {
  /**
   * The base URL for the API endpoint used to fetch reaction data.
   * This URL points to the version 1 of the reacts API on the amayomoka.com domain.
   *
   * @private
   * @readonly
   */
  private readonly baseUrl = "https://amayomoka.com/v1/reacts";
  private readonly categories = [
    "wave",
    "sip",
    "airkiss",
    "angrystare",
    "bite",
    "bleh",
    "blush",
    "brofist",
    "celebrate",
    "cheers",
    "clap",
    "confused",
    "cool",
    "cry",
    "cuddle",
    "dance",
    "drool",
    "evillaugh",
    "facepalm",
    "handhold",
    "happy",
    "headbang",
    "hug",
    "huh",
    "kiss",
    "laugh",
    "lick",
    "love",
    "mad",
    "nervous",
    "no",
    "nom",
    "nosebleed",
    "nuzzle",
    "nyah",
    "pat",
    "peek",
    "pinch",
    "poke",
    "pout",
    "punch",
    "roll",
    "run",
    "sad",
    "scared",
    "shout",
    "shrug",
    "shy",
    "sigh",
    "slap",
    "sleep",
    "slowclap",
    "smack",
    "smile",
    "smug",
    "sneeze",
    "sorry",
    "stare",
    "stop",
    "surprised",
    "sweat",
    "thumbsup",
    "tickle",
    "tired",
    "wink",
    "woah",
    "yawn",
    "yay",
    "yes",
  ] as const;

  /**
   * Obtiene un GIF de reacción de la categoría especificada
   * @param category - Categoría del GIF (wave, sip)
   * @returns URL del GIF
   */
  private async getReaction(
    category: (typeof this.categories)[number]
  ): Promise<string> {
    const response = await fetch(`${this.baseUrl}/${category}`);

    if (!response.ok) {
      throw new Error(
        `Error al obtener GIF de ${category}: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.url;
  }

  /**
   * Obtiene un GIF de saludo
   * @returns URL del GIF de saludo
   */
  async getWave(): Promise<string> {
    return this.getReaction("wave");
  }

  /**
   * Obtiene un GIF de sorber/beber
   * @returns URL del GIF de sorber
   */
  async getSip(): Promise<string> {
    return this.getReaction("sip");
  }

  /**
   * Obtiene un GIF de beso al aire
   * @returns URL del GIF de beso al aire
   */
  async getAirkiss(): Promise<string> {
    return this.getReaction("airkiss");
  }

  /**
   * Obtiene un GIF de mirada enojada
   * @returns URL del GIF de mirada enojada
   */
  async getAngrystare(): Promise<string> {
    return this.getReaction("angrystare");
  }

  /**
   * Obtiene un GIF de morder
   * @returns URL del GIF de morder
   */
  async getBite(): Promise<string> {
    return this.getReaction("bite");
  }

  async getBleh(): Promise<string> {
    return this.getReaction("bleh");
  }

  async getBlush(): Promise<string> {
    return this.getReaction("blush");
  }

  async getBrofist(): Promise<string> {
    return this.getReaction("brofist");
  }

  async getCelebrate(): Promise<string> {
    return this.getReaction("celebrate");
  }

  async getCheers(): Promise<string> {
    return this.getReaction("cheers");
  }

  async getClap(): Promise<string> {
    return this.getReaction("clap");
  }

  async getConfused(): Promise<string> {
    return this.getReaction("confused");
  }

  async getCool(): Promise<string> {
    return this.getReaction("cool");
  }

  async getCry(): Promise<string> {
    return this.getReaction("cry");
  }

  async getCuddle(): Promise<string> {
    return this.getReaction("cuddle");
  }

  async getDance(): Promise<string> {
    return this.getReaction("dance");
  }

  async getDrool(): Promise<string> {
    return this.getReaction("drool");
  }

  async getEvillaugh(): Promise<string> {
    return this.getReaction("evillaugh");
  }

  async getFacepalm(): Promise<string> {
    return this.getReaction("facepalm");
  }

  async getHandhold(): Promise<string> {
    return this.getReaction("handhold");
  }

  async getHappy(): Promise<string> {
    return this.getReaction("happy");
  }

  async getHeadbang(): Promise<string> {
    return this.getReaction("headbang");
  }

  async getHug(): Promise<string> {
    return this.getReaction("hug");
  }

  async getHuh(): Promise<string> {
    return this.getReaction("huh");
  }

  async getKiss(): Promise<string> {
    return this.getReaction("kiss");
  }

  async getLaugh(): Promise<string> {
    return this.getReaction("laugh");
  }

  async getLick(): Promise<string> {
    return this.getReaction("lick");
  }

  async getLove(): Promise<string> {
    return this.getReaction("love");
  }

  async getMad(): Promise<string> {
    return this.getReaction("mad");
  }

  async getNervous(): Promise<string> {
    return this.getReaction("nervous");
  }

  async getNo(): Promise<string> {
    return this.getReaction("no");
  }

  async getNom(): Promise<string> {
    return this.getReaction("nom");
  }

  async getNosebleed(): Promise<string> {
    return this.getReaction("nosebleed");
  }

  async getNuzzle(): Promise<string> {
    return this.getReaction("nuzzle");
  }

  async getNyah(): Promise<string> {
    return this.getReaction("nyah");
  }

  async getPat(): Promise<string> {
    return this.getReaction("pat");
  }

  async getPeek(): Promise<string> {
    return this.getReaction("peek");
  }

  async getPinch(): Promise<string> {
    return this.getReaction("pinch");
  }

  async getPoke(): Promise<string> {
    return this.getReaction("poke");
  }

  async getPout(): Promise<string> {
    return this.getReaction("pout");
  }

  async getPunch(): Promise<string> {
    return this.getReaction("punch");
  }

  async getRoll(): Promise<string> {
    return this.getReaction("roll");
  }

  async getRun(): Promise<string> {
    return this.getReaction("run");
  }

  async getSad(): Promise<string> {
    return this.getReaction("sad");
  }

  async getScared(): Promise<string> {
    return this.getReaction("scared");
  }

  async getShout(): Promise<string> {
    return this.getReaction("shout");
  }

  async getShrug(): Promise<string> {
    return this.getReaction("shrug");
  }

  async getShy(): Promise<string> {
    return this.getReaction("shy");
  }

  async getSigh(): Promise<string> {
    return this.getReaction("sigh");
  }

  async getSlap(): Promise<string> {
    return this.getReaction("slap");
  }

  async getSleep(): Promise<string> {
    return this.getReaction("sleep");
  }

  async getSlowclap(): Promise<string> {
    return this.getReaction("slowclap");
  }

  async getSmack(): Promise<string> {
    return this.getReaction("smack");
  }

  async getSmile(): Promise<string> {
    return this.getReaction("smile");
  }

  async getSmug(): Promise<string> {
    return this.getReaction("smug");
  }

  async getSneeze(): Promise<string> {
    return this.getReaction("sneeze");
  }

  async getSorry(): Promise<string> {
    return this.getReaction("sorry");
  }

  async getStare(): Promise<string> {
    return this.getReaction("stare");
  }

  async getStop(): Promise<string> {
    return this.getReaction("stop");
  }

  async getSurprised(): Promise<string> {
    return this.getReaction("surprised");
  }

  async getSweat(): Promise<string> {
    return this.getReaction("sweat");
  }

  async getThumbsup(): Promise<string> {
    return this.getReaction("thumbsup");
  }

  async getTickle(): Promise<string> {
    return this.getReaction("tickle");
  }

  async getTired(): Promise<string> {
    return this.getReaction("tired");
  }

  async getWink(): Promise<string> {
    return this.getReaction("wink");
  }

  async getWoah(): Promise<string> {
    return this.getReaction("woah");
  }

  async getYawn(): Promise<string> {
    return this.getReaction("yawn");
  }

  async getYay(): Promise<string> {
    return this.getReaction("yay");
  }

  async getYes(): Promise<string> {
    return this.getReaction("yes");
  }
}

// Mantenemos la exportación por defecto para compatibilidad
export default MokaAPI;
