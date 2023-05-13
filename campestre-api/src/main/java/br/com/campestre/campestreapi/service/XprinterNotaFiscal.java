package br.com.campestre.campestreapi.service;

import br.com.campestre.campestreapi.domain.dto.PedidoDto;
import br.com.campestre.campestreapi.domain.service.NotaFiscalService;
import jpos.JposException;
import jpos.POSPrinter;
import jpos.POSPrinterConst;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class XprinterNotaFiscal implements NotaFiscalService {

    private POSPrinter printer;

    public XprinterNotaFiscal() {
        this.printer = new POSPrinter();
    }

    @Override
    public void imprimir(PedidoDto pedidoDto) {
        try {
            this.printer.open("Xprinter58");
            this.printer.claim(1000);
            this.printer.setDeviceEnabled(true);

            this.printer.printNormal(POSPrinterConst.PTR_S_RECEIPT, "Número da nota: " + 10);
            this.printer.printNormal(POSPrinterConst.PTR_S_RECEIPT, "Data: " + LocalDateTime.now());

            this.printer.setDeviceEnabled(false);
            this.printer.release();
            this.printer.close();
        } catch (JposException e) {
            throw new RuntimeException(e);
        }
    }
}
