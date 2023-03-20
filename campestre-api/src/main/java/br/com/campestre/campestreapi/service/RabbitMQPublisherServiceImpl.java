package br.com.campestre.campestreapi.service;

import br.com.campestre.campestreapi.domain.service.RabbitMQPublisherService;
import br.com.campestre.campestreapi.framework.rabbitmq.RabbitMQSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQPublisherServiceImpl implements RabbitMQPublisherService {

    private final RabbitMQSender rabbitMQSender;

    @Autowired
    public RabbitMQPublisherServiceImpl(RabbitMQSender rabbitMQSender) {
        this.rabbitMQSender = rabbitMQSender;
    }

    @Override
    public void send(String message) {
        rabbitMQSender.send(message);
    }
}
