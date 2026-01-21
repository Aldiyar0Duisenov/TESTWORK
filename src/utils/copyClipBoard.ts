async function copy(value: any) {
  await navigator.clipboard.writeText(value);
}

export { copy };
