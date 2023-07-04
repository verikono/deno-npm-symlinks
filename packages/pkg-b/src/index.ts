import { packageAFromPackageB } from 'pkg-a';

export function packageB() {
    console.info('invoked pkg-a.packageA');
    packageAFromPackageB();
}

export function packageBFromPackageA() {
    console.info('invoked packageBFromPackageA');
}
