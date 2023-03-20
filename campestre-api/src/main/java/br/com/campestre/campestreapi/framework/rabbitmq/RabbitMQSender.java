package br.com.campestre.campestreapi.framework.rabbitmq;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQSender {

    @Value("${rabbitmq.routingkey}")
    private String routingkey;
    private final AmqpTemplate rabbitTemplate;
    private final Queue queue;
    @Autowired
    public RabbitMQSender(AmqpTemplate rabbitTemplate, Queue queue) {
        this.rabbitTemplate = rabbitTemplate;
        this.queue = queue;
    }

    private static Logger logger = LogManager.getLogger(RabbitMQSender.class.toString());

    public void send(String message) {
        rabbitTemplate.convertAndSend(queue.getName(), routingkey, message);
        logger.info("Sending Message to the Queue : " + message);
    }
}
