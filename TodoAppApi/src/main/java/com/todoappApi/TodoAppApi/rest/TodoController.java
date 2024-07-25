package com.todoappApi.TodoAppApi.rest;

import com.todoappApi.TodoAppApi.todo.Todo;
import com.todoappApi.TodoAppApi.todo.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username){
        return todoService.findByUsername(username);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo retrieveTodo(@PathVariable String username , @PathVariable int id) {
        return todoService.findById(id);
    }

    @DeleteMapping("/username/{username}/todos/{id}")
    public ResponseEntity<Void> retrieveTodoDelete(@PathVariable String username , @PathVariable int id){
        todoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
