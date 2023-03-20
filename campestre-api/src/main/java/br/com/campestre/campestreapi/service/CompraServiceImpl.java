package br.com.campestre.campestreapi.service;

import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.service.CompraService;
import br.com.campestre.campestreapi.domain.service.RabbitMQPublisherService;
import br.com.campestre.campestreapi.framework.extensions.JsonExtensions;
import org.hibernate.cfg.NotYetImplementedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@Service
public class CompraServiceImpl implements CompraService {
    private final RabbitMQPublisherService rabbitMQPublisherService;

    @Autowired
    public CompraServiceImpl(RabbitMQPublisherService rabbitMQPublisherService) {
        this.rabbitMQPublisherService = rabbitMQPublisherService;
    }

    @Override
    public void realizar(CompraRequest compraRequest) {
        //TODO implementar chamada ao serviço de emissão de nota não fiscal síncrono
        CompletableFuture<Void> completableFuture = CompletableFuture
                .runAsync(() -> this.rabbitMQPublisherService.send(JsonExtensions.serializeToJson(compraRequest)));

        try {
            completableFuture.get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }
}
