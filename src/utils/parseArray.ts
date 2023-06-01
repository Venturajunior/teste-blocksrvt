type ParseType = (array: any[]) => any[];

export const parseArray: ParseType = (array = []) => {
  return array.filter(
    (obj, index, self) => index === self.findIndex((o) => o.id === obj.id)
  );
}