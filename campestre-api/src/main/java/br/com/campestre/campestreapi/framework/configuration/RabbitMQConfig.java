package br.com.campestre.campestreapi.framework.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.ConditionalRejectingErrorHandler;
import org.springframework.amqp.rabbit.support.ListenerExecutionFailedException;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.util.ErrorHandler;

@Configuration
public class RabbitMQConfig {
    @Value("${rabbitmq.queue}")
    private String queueName;
    @Value("${rabbitmq.routingkey}")
    private String routingkey;
    @Value("${rabbitmq.exchange}")
    private String exchange;

    @Bean
    public Queue testeQueue() {
        return new Queue(queueName, true);
    }
    @Bean
    DirectExchange exchange() {
        return new DirectExchange(exchange);
    }
    @Bean
    Binding testeBinding(Queue testeQueue, DirectExchange exchange) {
        return BindingBuilder.bind(testeQueue).to(exchange).with(routingkey);
    }
}
