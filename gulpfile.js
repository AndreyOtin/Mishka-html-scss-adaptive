import tasks from "./gulp/tasks.js"
import gulp from 'gulp';





const mainTasks = gulp.series(tasks.images,gulp.parallel(tasks.html,tasks.scss))

gulp.task("svg", tasks.svgM)


gulp.task("default", gulp.series(tasks.del,mainTasks, gulp.parallel(tasks.watcher, tasks.server)))