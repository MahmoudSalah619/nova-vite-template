export function stringifyParam(param: string[]) {
  return param?.join(",");
}

export function parseParam(param: string) {
  return param?.split(",");
}
