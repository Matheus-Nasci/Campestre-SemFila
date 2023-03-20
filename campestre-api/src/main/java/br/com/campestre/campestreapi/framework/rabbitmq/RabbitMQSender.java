package br.com.campestre.campestreapi.framework.rabbitmq;

import br.com.campestre.campestreapi.domain.FilaCampestrePublishRabbit;
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
        var filaCampestrePublishRabbit = new FilaCampestrePublishRabbit("1.0", "INCLUIR_PREPARANDO", message);
        rabbitTemplate.convertAndSend(queue.getName(), routingkey, filaCampestrePublishRabbit.getAsJson());
        logger.info("Sending Message to the Queue : " + filaCampestrePublishRabbit.getAsJson());
    }
}
