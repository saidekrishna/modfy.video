import { writable } from "svelte/store";
import {
  FORMAT_TYPES,
  CODEC_TYPES,
  CONFIG_OPTION_TYPES,
} from "./configuration";

const defaultFiles: File[] = [];

export const fileUploaded = writable(defaultFiles);

export const terminalText = writable("");

export const loadedStore = writable(false);

export const transcoded = writable("");

export const clearTerminal = writable(false);

export const videoDisplay = writable(false);

export const submit = writable(false);

export const showConfig = writable(false);

export const processed = writable(false);

export const progressStore = writable(1);

export const sliderStore = writable(0);

export const hardwareData = writable({});

export const config = writable({
  /**
   * The format for FFmpeg to convert to
   */

  format: FORMAT_TYPES.MP4,
  /**
   * The video codec used for compression
   */

  codec: CODEC_TYPES.H264,

  /**
   * The amount of compression to apply. The range of acceptable values is based
   * on the codec.
   *
   */
  compressionLevel: 0,
});

/**
 * Sets the config option in state for the given type as val
 *
 *      type - One of CONFIG_OPTION_TYPES
 *      val - One of FORMAT_TYPES or CODEC_TYPES
 */
export const configSetOption = (type: any, val: any) => {
  if (!Object.values(CONFIG_OPTION_TYPES).includes(type)) return;

  const temp = { [type]: val };
  config.update((state) => Object.assign({}, state, temp));
};
