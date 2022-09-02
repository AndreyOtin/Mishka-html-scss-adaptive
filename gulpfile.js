import tasks from "./gulp/tasks.js"
import gulp from 'gulp';





const mainTasks = gulp.parallel(tasks.html,tasks.scss, tasks.images)

gulp.task("svg", tasks.svgM)


gulp.task("default", gulp.series(tasks.del,mainTasks, gulp.parallel(tasks.watcher, tasks.server)))