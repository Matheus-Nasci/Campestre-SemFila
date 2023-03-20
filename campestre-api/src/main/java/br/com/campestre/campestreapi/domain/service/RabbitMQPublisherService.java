package br.com.campestre.campestreapi.domain.service;

public interface RabbitMQPublisherService {
    void send(String message);
}
