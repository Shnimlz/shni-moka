export class MokaAPI {
  /**
   * The base URL for the API endpoint used to fetch reaction data.
   * This URL points to the version 1 of the reacts API on the amayomoka.com domain.
   *
   * @private
   * @readonly
   */
  private readonly baseUrl = "https://amayomoka.com/v1/reacts";
  private readonly categories = ["wave", "sip"] as const;

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
}

// Mantenemos la exportación por defecto para compatibilidad
export default MokaAPI;
