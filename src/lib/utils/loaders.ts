export function assetUrl(pathname: string) {
	if (pathname.startsWith('/')) return pathname;
	return `/${pathname}`;
}

