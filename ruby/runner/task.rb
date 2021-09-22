require_relative '../task'

task = Task.new
task.id = 1
task.task_status = 'going'
task.name = 'task_name'
task.due_date = Time.now + 1
task.postpone_count = 0

puts task
