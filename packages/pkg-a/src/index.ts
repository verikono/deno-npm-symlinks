import { packageBFromPackageA } from 'pkg-b';

export function packageA() {
    console.info('invoked pkg-a.packageA');
    packageBFromPackageA();
}

export function packageAFromPackageB() {
    console.info('invoked packageAFromPackageB');
}
