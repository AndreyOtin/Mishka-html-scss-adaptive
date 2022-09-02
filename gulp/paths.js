import path from "path"

const rootFolder = path.resolve();

const paths = {
    srcRoot: 'src',
    src: {
        images: 'src/img',
        fonts: 'src/fonts',
        htmlFiles: 'src/html',
        jsFiles: 'src/js',
        scss: 'src/scss'
    },
    buildRoot: "build",
    build: {
        images: 'build/img',
        fonts: 'build/fonts',
        htmlFiles: 'build/html',
        jsFiles: 'build/js',
        css: 'build/css'

    }

}

const folder = {
    src: paths.srcRoot,
    srcImgs: paths.src.images,
    srcFonts: paths.src.fonts,
    srcHtml: paths.src.htmlFiles,
    srcJs: paths.src.jsFiles,
    srcScss: paths.src.scss,
    build: paths.buildRoot,
    buildCss: paths.build.css,
    buildImgs: paths.build.images,
    buildFonts: paths.build.fonts,
    buildHtml: paths.build.htmlFiles,
    buildJs: paths.build.jsFiles
}

const files = {
    src: folder.src + "/**/*.*",
    srcImgs: folder.srcImgs + "/**/*.{jpg, jpeg, png}",
    srcSvg: folder.srcImgs + "/**/*.svg",
    srcFonts: folder.srcFonts + "/**/*.*",
    srcHtml: folder.srcHtml + "/**/*.*",
    srcScss: folder.srcScss + "/**/*.*",
    srcJs: folder.srcJs + "/**/*.*",
    build: folder.build + "/**/*.*",
    buildCss: folder.buildCss + "/**/*.*",
    buildImgs: folder.buildImgs + "/**/*.*",
    buildFonts: folder.buildFonts + "/**/*.*",
    buildHtml: folder.buildHtml + "/**/*.*",
    buildJs: folder.buildJs + "/**/*.*",
}


// const folder = {
//     src: path.resolve(paths.srcRoot),
//     srcImgs: path.resolve(paths.src.images),
//     srcFonts: path.resolve(paths.src.fonts),
//     srcHtml: path.resolve(paths.src.htmlFiles),
//     srcJs: path.resolve(paths.src.jsFiles),
//     build: path.resolve(paths.buildRoot),
//     buildImgs: path.resolve(paths.build.images),
//     buildFonts: path.resolve(paths.build.fonts),
//     buildHtml: path.resolve(paths.build.htmlFiles),
//     buildJs: path.resolve(paths.build.jsFiles)
// }

// const files = {
//     src: folder.src + "/**/*.*",
//     srcImgs: folder.srcImgs + "/**/*.*",
//     srcFonts: folder.srcFonts + "/**/*.*",
//     srcHtml: folder.srcHtml + "/**/*.*",
//     srcJs: folder.srcJs + "/**/*.*",
//     build: folder.build + "/**/*.*",
//     buildImgs: folder.buildImgs + "/**/*.*",
//     buildFonts: folder.buildFonts + "/**/*.*",
//     buildHtml: folder.buildHtml + "/**/*.*",
//     buildJs: folder.buildJs + "/**/*.*",
// }





export default {
    folder,
    files,
    rootFolder,

}