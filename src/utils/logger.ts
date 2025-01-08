export const logger = {
    log(message: string) {
      console.log(`[INFO]: ${message}`);
    },
    error(message: string) {
      console.error(`[ERROR]: ${message}`);
    },
  };
  