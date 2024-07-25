package com.todoappApi.TodoAppApi.rest;

import com.todoappApi.TodoAppApi.HelloWorld.HelloWorldBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/hello-world")
    public String Helloword(){
        return "Hello World" ;
    }

    @GetMapping("/hello-word-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello word");
    }

    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

}
