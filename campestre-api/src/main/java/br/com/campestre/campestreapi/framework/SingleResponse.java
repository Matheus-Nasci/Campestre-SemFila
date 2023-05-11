package br.com.campestre.campestreapi.framework;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SingleResponse<T> {
    public T data;

    public SingleResponse(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}