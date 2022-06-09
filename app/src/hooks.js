export const handle = async ({event, resolve}) => {
  event.locals = {
    user: 'me',
    host: 'localhost',
    database: 'bechdel',
    password: 'password',
    port: 5432,
  }
  const response = await resolve(event)
  // console.log(event)
  return response;
}