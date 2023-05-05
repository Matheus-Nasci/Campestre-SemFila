package br.com.campestre.campestreapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class SwaggerController {

    @GetMapping()
    public RedirectView swagger() {
        return new RedirectView("/campestre-sem-fila/api/v1/swagger-ui/index.html");
    }

}
