export const timeTreatment = (value: string) => (!!`${value}`.length && value !== "-----"
  ? new Date(value)
    .toLocaleDateString("en-US", {
      day: "2-digit",
      year: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    })
    .toString()
  : "-----");

export const dateTreatment = (value: string) => (!!`${value}`.length && value !== "-----"
  ? new Date(value)
    .toLocaleDateString("en-US", {
      day: "2-digit",
      year: "numeric",
      month: "short",
    })
    .toString()
  : "-----");

export function getAge(dateString: string) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}
