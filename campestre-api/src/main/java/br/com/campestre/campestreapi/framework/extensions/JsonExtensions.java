package br.com.campestre.campestreapi.framework.extensions;

import com.google.gson.Gson;

public class JsonExtensions {
    public static String serializeToJson(Object objeto) {
        return new Gson().toJson(objeto);
    }

    public static <T> T serializeToOjbect(String jsonReader, Class<T> object) {
        return new Gson().fromJson(jsonReader, object);
    }
}
