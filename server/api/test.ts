export default defineEventHandler(async (event) => {
  return {
    test: 'a \r\n\r\n b \r\n\r\n c',
  };
});
