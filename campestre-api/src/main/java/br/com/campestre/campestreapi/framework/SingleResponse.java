package br.com.campestre.campestreapi.framework;

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